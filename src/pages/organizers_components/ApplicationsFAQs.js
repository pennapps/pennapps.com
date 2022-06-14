import * as React from 'react'
import FAQSection from './FAQSection'

export default function ApplicationsFAQs() {

    const questions = {
        "Who can be an organizer for PennApps?":
            "Only Penn students can be organizers. If you’re a current Penn student, look out for an application in April if you are interested in joining us!",
        "Do I need previous experience to be an organizer?":
            "ANSWER ANSWER ANSWER",
        "What is the time commitment?":
            "ANSWER ANSWER ANSWER"

    }
    return (
        <div className="applications-faqs">
            <h3>FAQs</h3>
            {
                Object.keys(questions).map((key, index) => (
                    <FAQSection
                        q={key}
                        a={questions[key]}
                    />
                ))
            }
        </div>
    )
}