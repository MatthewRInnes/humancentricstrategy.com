import type { NextApiRequest, NextApiResponse } from 'next'

type ContactData = {
  name: string
  email: string
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, message }: ContactData = req.body

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' })
    }

    // Here you would typically:
    // 1. Send an email using a service like SendGrid, Mailgun, or Nodemailer
    // 2. Store the contact form data in a database
    // 3. Send a notification to your team
    
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    })

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    res.status(200).json({ 
      message: 'Contact form submitted successfully',
      success: true 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({ 
      message: 'Internal server error',
      success: false 
    })
  }
} 