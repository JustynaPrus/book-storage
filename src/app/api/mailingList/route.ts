import { NextResponse } from "next/server";

type Data = {
  mail: string;
};

export async function POST(request: Request) {
  
  if(!process.env.SENDGRID_MAILING_ID || !process.env.SENDGRID_API_KEY){
    return Response.json({
      message: 'Oups, there was a problem with your subscription, please try again or contact us',
    })
  }

  const reqData = (await request.json()) as Data;
  const url = `https://api.sendgrid.com/v3/marketing/contacts`;

  const data = {
    contacts: [{ email: reqData.mail }],
    list_ids: [process.env.SENDGRID_MAILING_ID],
  };
  const headers = {
    Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    'Content-Type': 'application/json',
  };

  const options = {
    body: JSON.stringify(data),
    headers: headers,
    method: 'PUT',
  };
  try {
    const response = await fetch(url, options);
    const responseData = await response.json();
    if (responseData.errors) {
      return NextResponse.json(responseData, { status: 500 });
    } else {
      return NextResponse.json(responseData, { status: 200 })
    }
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
