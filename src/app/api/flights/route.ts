import { NextResponse } from 'next/server';

const AMADEUS_BASE_URL = 'https://test.api.amadeus.com';
const API_KEY = 'pkH6KZ0zTzUQj8CImkrgtP9QzIEAkGWN';
const API_SECRET = 'qzkC1b0sbmybRFAJ';

let accessToken = '';
let tokenExpiration = 0;

async function getAccessToken() {
    if (accessToken && Date.now() < tokenExpiration) {
        return accessToken;
    }

    const response = await fetch(`${AMADEUS_BASE_URL}/v1/security/oauth2/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: API_KEY,
            client_secret: API_SECRET,
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to get Amadeus access token');
    }

    const data = await response.json();
    accessToken = data.access_token;
    // Expire 1 minute before actual expiration to be safe
    tokenExpiration = Date.now() + (data.expires_in - 60) * 1000;

    return accessToken;
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const origin = searchParams.get('origin');
    const destination = searchParams.get('destination');
    const departureDate = searchParams.get('departureDate');
    const adults = searchParams.get('adults') || '1';
    const travelClass = searchParams.get('travelClass') || 'ECONOMY';

    if (!origin || !destination || !departureDate) {
        return NextResponse.json(
            { error: 'Missing required parameters: origin, destination, departureDate' },
            { status: 400 }
        );
    }

    try {
        const token = await getAccessToken();

        const url = `${AMADEUS_BASE_URL}/v2/shopping/flight-offers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${departureDate}&adults=${adults}&travelClass=${travelClass.toUpperCase()}&max=10`;

        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Amadeus API error:', errorText);
            return NextResponse.json({ error: 'Failed to fetch flights from Amadeus' }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Flight search error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
