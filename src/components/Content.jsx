import  { useState } from 'react'
import { useTranslation } from 'react-i18next';


export default function Content() {


  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const { t } = useTranslation();





  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://backend-email-service-three.vercel.app/api/send-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (response.ok) {
        setSubmitMessage(t('site.pdfSentSuccess'))
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage(t('site.pdfSentError'))
    } finally {
      setEmail('')
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex flex-col items-center justify-center p-4 bg-slate-700 text-slate-100">
      <form onSubmit={handleSubmit} className="mt-12 w-full max-w-md animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-4 text-center"> {t("site.subscribe")}</h2>
        <div className="flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Send'}
          </button>
        </div>
        {submitMessage && (
          <p className="mt-2 text-green-600 text-center">{submitMessage}</p>
        )}
      </form>
    </main>
  )
}