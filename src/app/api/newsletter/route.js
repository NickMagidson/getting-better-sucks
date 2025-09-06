import { NextResponse } from 'next/server';

/**
 * Newsletter Subscription API Route
 * 
 * This endpoint handles newsletter subscriptions from the BlogPost component.
 * Integrate with your preferred email service provider.
 */

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Example: Mailchimp Integration
    if (process.env.MAILCHIMP_API_KEY && process.env.MAILCHIMP_LIST_ID) {
      const response = await subscribeToMailchimp(email);
      if (response.success) {
        return NextResponse.json({ success: true, message: 'Successfully subscribed!' });
      } else {
        return NextResponse.json(
          { error: response.error || 'Subscription failed' },
          { status: 400 }
        );
      }
    }

    // Example: ConvertKit Integration
    if (process.env.CONVERTKIT_API_KEY && process.env.CONVERTKIT_FORM_ID) {
      const response = await subscribeToConvertKit(email);
      if (response.success) {
        return NextResponse.json({ success: true, message: 'Successfully subscribed!' });
      } else {
        return NextResponse.json(
          { error: response.error || 'Subscription failed' },
          { status: 400 }
        );
      }
    }

    // Example: Custom Database Integration
    if (process.env.DATABASE_URL) {
      const response = await subscribeToDatabase(email);
      if (response.success) {
        return NextResponse.json({ success: true, message: 'Successfully subscribed!' });
      } else {
        return NextResponse.json(
          { error: response.error || 'Subscription failed' },
          { status: 400 }
        );
      }
    }

    // Fallback: Log to console (development only)
    console.log(`Newsletter subscription attempt: ${email}`);
    return NextResponse.json({ 
      success: true, 
      message: 'Subscription received (development mode)' 
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Mailchimp Integration
async function subscribeToMailchimp(email) {
  try {
    const response = await fetch(
      `https://${process.env.MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
          tags: ['blog-subscriber'], // Optional: tag subscribers
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      return { success: true };
    } else {
      // Handle Mailchimp-specific errors
      if (data.title === 'Member Exists') {
        return { success: false, error: 'Email is already subscribed' };
      }
      return { success: false, error: data.detail || 'Subscription failed' };
    }
  } catch (error) {
    console.error('Mailchimp error:', error);
    return { success: false, error: 'Service temporarily unavailable' };
  }
}

// ConvertKit Integration
async function subscribeToConvertKit(email) {
  try {
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: process.env.CONVERTKIT_API_KEY,
          email: email,
          tags: ['blog-subscriber'], // Optional: tag subscribers
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      return { success: true };
    } else {
      return { success: false, error: data.message || 'Subscription failed' };
    }
  } catch (error) {
    console.error('ConvertKit error:', error);
    return { success: false, error: 'Service temporarily unavailable' };
  }
}

// Database Integration Example (using your preferred ORM/database)
async function subscribeToDatabase(email) {
  try {
    // Example using Prisma (adjust for your database setup)
    // const { PrismaClient } = require('@prisma/client');
    // const prisma = new PrismaClient();
    
    // Check if email already exists
    // const existingSubscriber = await prisma.newsletter.findUnique({
    //   where: { email }
    // });
    
    // if (existingSubscriber) {
    //   return { success: false, error: 'Email is already subscribed' };
    // }
    
    // Create new subscriber
    // await prisma.newsletter.create({
    //   data: {
    //     email,
    //     subscribedAt: new Date(),
    //     source: 'blog'
    //   }
    // });

    // For demonstration, we'll just log it
    console.log(`Would save to database: ${email}`);
    
    return { success: true };
  } catch (error) {
    console.error('Database error:', error);
    return { success: false, error: 'Database error' };
  }
}

/*
Environment Variables Setup:
============================

For Mailchimp:
MAILCHIMP_API_KEY=your_api_key
MAILCHIMP_LIST_ID=your_list_id
MAILCHIMP_DC=us1 (your datacenter)

For ConvertKit:
CONVERTKIT_API_KEY=your_api_key
CONVERTKIT_FORM_ID=your_form_id

For Database:
DATABASE_URL=your_database_connection_string

Usage in BlogPost component:
============================

const handleNewsletterSubmit = async (e) => {
  e.preventDefault();
  setSubscriptionStatus('loading');
  
  try {
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: newsletterEmail })
    });
    
    const data = await response.json();
    
    if (response.ok) {
      setSubscriptionStatus('success');
      setNewsletterEmail('');
    } else {
      setSubscriptionStatus('error');
      console.error(data.error);
    }
  } catch (error) {
    setSubscriptionStatus('error');
    console.error('Newsletter subscription error:', error);
  }
};
*/
