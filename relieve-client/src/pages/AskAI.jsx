import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyA4yQdMZoyFNQT7QS5d0ERQNHBBEGBeVkg");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const AskAI = () => {
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handlePresetQuery = (presetQuery) => {
        setQuery(presetQuery);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponse("");

        try {
            const result = await model.generateContent(query);
            setResponse(result.response.text());
        } catch (error) {
            console.error("Error fetching AI response:", error);
            setResponse("Error fetching response. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const presetQueries = [
        "What are the security measures during a flood?",
        "How can I stay safe from diseases during a disaster?",
        "What food items should I donate for relief?",
        "What sanitation supplies are necessary after a disaster?",
        "How to manage mental health during a disaster?",
    ];

    const renderResponse = (response) => {
        return response.split('\n').map((line, index) => {
            if (line.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold text-blue-primary mt-4">{line.slice(3)}</h2>;
            }
            if (line.startsWith('**')) {
                return <p key={index} className="font-semibold mt-2">{line.replace(/\*\*/g, '')}</p>;
            }
            if (line.startsWith('* ')) {
                return <li key={index} className="list-disc list-inside ml-6">{line.slice(2)}</li>;
            }
            return <p key={index} className="mt-1 text-gray-800">{line}</p>;
        });
    };

    return (
        <div className="ask-ai-container p-4">
            <h2 className="text-4xl font-manrope text-blue-primary text-center my-10 font-black">Ask AI about Disaster Management</h2>
            <form onSubmit={handleSubmit} className="flex flex-col mt-10">
                <textarea 
                    value={query} 
                    onChange={handleInputChange} 
                    placeholder="Type your query here..." 
                    className="border-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-xl text-gray-600 font-semibold border-blue-primary rounded-lg p-2"
                    rows={4}
                />
                <button 
                    type="submit" 
                    className="mt-2 bg-blue-primary text-white text-xl font-semibold rounded p-2 hover:bg-blue-dark"
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Ask AI"}
                </button>
            </form>
            <div className="preset-queries mt-6">
                <h3 className="text-2xl text-blue-primary border-b border-blue-dark p-2 mb-6 rounded-sm font-semibold">Quick Queries</h3>
                <div className="flex flex-wrap gap-2">
                    {presetQueries.map((presetQuery, index) => (
                        <button 
                            key={index} 
                            onClick={() => handlePresetQuery(presetQuery)} 
                            className="bg-gradient-to-r from-blue-50 to-cyan-50 shadow-lg text-xl rounded-sm p-4 hover:bg-gray-300"
                        >
                            {presetQuery}
                        </button>
                    ))}
                </div>
            </div>
            <div className="response-area mt-6">
                {response && (
                    <div className="border rounded-md bg-gradient-to-r from-blue-50 to-cyan-50 p-6">
                        <h4 className="text-2xl font-bold text-blue-primary font-manrope">AI Response:</h4>
                        <div className="response-content mt-4 text-md">
                            {renderResponse(response)}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AskAI;