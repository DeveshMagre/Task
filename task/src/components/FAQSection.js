import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function FAQSection() {
  const [expandedLeft, setExpandedLeft] = useState(null)
  const [expandedRight, setExpandedRight] = useState(null)

  const leftFAQs = [
    {
      question: "Labore dolore ea ipsum ips ?",
      answer:
        "Incididunt ex irure ad non Lorem culpa fugiat exercitation ullamco esse minim tempor quis !",
    },
    {
      question: "Sunt ad veniam eu laboris ?",
      answer: "Incididunt ex irure ad non Lorem culpa fugiat exercitation",
    },
    {
      question: "velit quis eiusmod laborum ?",
      answer: "Incididunt ex irure ad non Lorem culpa fugiat exercitation",
    },
    {
      question: "Magna irure ex dolore ?",
      answer: "Incididunt ex irure ad non Lorem culpa fugiat exercitation",
    },
    {
      question: "Magna irure ex dolore ?",
      answer: "Incididunt ex irure ad non Lorem culpa fugiat exercitation",
    },
  ]

  const rightFAQs = [
    {
      question: "Labore dolore ea ipsum ips ?",
      answer:
        "Incididunt ex irure ad non Lorem culpa fugiat exercitation ullamco esse minim tempor quis !",
    },
    {
      question: "Sunt ad veniam eu laboris ?",
      answer: "Incididunt ex irure ad non Lorem culpa fugiat exercitation",
    },
    {
      question: "velit quis eiusmod laborum ?",
      answer: "Incididunt ex irure ad non Lorem culpa fugiat exercitation",
    },
    {
      question: "Magna irure ex dolore ?",
      answer: "Incididunt ex irure ad non Lorem culpa fugiat exercitation",
    },
    {
      question: "Magna irure ex dolore ?",
      answer: "Incididunt ex irure ad non Lorem culpa fugiat exercitation",
    },
  ]

  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How can we help?</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            {leftFAQs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => setExpandedLeft(expandedLeft === index ? null : index)}
                  className="w-full bg-white rounded-lg shadow-sm p-4 text-left transition-all hover:shadow-md"
                >
                  <div className="flex justify-between items-center">
                    <h3
                      className={`font-medium transition-all ${
                        expandedLeft === index ? 'text-blue-500' : 'text-gray-900'
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <div
                      className={`w-8 h-8 flex justify-center items-center rounded-full border-2 transition-all ${
                        expandedLeft === index ? 'border-blue-500' : 'border-gray-300'
                      }`}
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          expandedLeft === index ? 'text-blue-500 rotate-180' : 'text-gray-500'
                        }`}
                      />
                    </div>
                  </div>
                  <div
                    className={`mt-2 text-sm overflow-hidden transition-all ${
                      expandedLeft === index ? 'max-h-40 text-blue-500' : 'max-h-0 text-gray-500'
                    }`}
                  >
                    {faq.answer}
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div>
            {rightFAQs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => setExpandedRight(expandedRight === index ? null : index)}
                  className="w-full bg-white rounded-lg shadow-sm p-4 text-left transition-all hover:shadow-md"
                >
                  <div className="flex justify-between items-center">
                    <h3
                      className={`font-medium transition-all ${
                        expandedRight === index ? 'text-blue-500' : 'text-gray-900'
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <div
                      className={`w-8 h-8 flex justify-center items-center rounded-full border-2 transition-all ${
                        expandedRight === index ? 'border-blue-500' : 'border-gray-300'
                      }`}
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          expandedRight === index ? 'text-blue-500 rotate-180' : 'text-gray-500'
                        }`}
                      />
                    </div>
                  </div>
                  <div
                    className={`mt-2 text-sm overflow-hidden transition-all ${
                      expandedRight === index ? 'max-h-40 text-blue-500' : 'max-h-0 text-gray-500'
                    }`}
                  >
                    {faq.answer}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="bg-teal-400 text-white px-6 py-2 rounded-full hover:bg-teal-500 transition-colors">
            Find more FAQs
          </button>
        </div>
      </div>
    </div>
  )
}

export default FAQSection;
