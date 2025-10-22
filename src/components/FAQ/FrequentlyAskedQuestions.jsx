import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { QuestionsData } from "./QuestionsData";
import "./FrequentlyAskedQuestions.css"

const FrequentlyAskedQuestions = () => {
    return (
        <section id="faq" className="faq">
            <div className="container">
                <div className="faq-header">
                    <h2 className="faq-title">You Might Ask</h2>
                    <p className="faq-subtitle">Frequently Asked Questions</p>
                </div>
                <ul className="faq-list">
                    {QuestionsData.map((item)=> {
                        return (
                            <li className="accordion" key={item.id}>
                                <div className="question">
                                   <span className="arrow-icon"> <IoIosArrowDown /></span>
                                   <div className="collapsible-title">{item.question}</div>
                                </div>
                                <div className="collapsible-text">
                                    {item.answer}
                                </div>
                            </li>
                        )
                    })}
                </ul>
                 <a href="#contact" className="ask-more-btn">Ask More</a>
            </div>
        </section>
    )
}

export default FrequentlyAskedQuestions;
