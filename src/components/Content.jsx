import  { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import imageUrls from './images.json'

export default function Content() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const { t } = useTranslation();

  useEffect(() => {
    const img = new Image()
    img.src = imageUrls.images[currentImageIndex]
    img.onload = () => setImageLoaded(true)
  }, [currentImageIndex])

  const handleImageClick = () => {
    setImageLoaded(false)
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % imageUrls.images.length
    )
  }

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
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
{/*       <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-gray-800 animate-fade-in-down">
      {t("site.welcome")}
      </h1> */}
      
      <div 
        className="relative w-64 h-64 md:w-96 md:h-96 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up cursor-pointer"
        onClick={handleImageClick}
      >
        <img
          src={imageUrls.images[currentImageIndex]}
          alt="Featured Image"
          className={`w-full h-full object-cover transition-transform duration-300 ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        )}
      </div>
      <p className="mt-2 text-sm text-gray-600"> {t("site.clickToChange")}</p>

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