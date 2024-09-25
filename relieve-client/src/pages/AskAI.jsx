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

    return (
        <div className="ask-ai-container">
            <h2 className="text-xl font-bold">Ask AI about Disaster Management</h2>
            <form onSubmit={handleSubmit} className="flex flex-col mt-4">
                <textarea 
                    value={query} 
                    onChange={handleInputChange} 
                    placeholder="Type your query here..." 
                    className="border rounded p-2"
                    rows={4}
                />
                <button 
                    type="submit" 
                    className="mt-2 bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Ask AI"}
                </button>
            </form>
            <div className="preset-queries mt-4">
                <h3 className="font-semibold">Quick Queries</h3>
                <div className="flex flex-wrap gap-2">
                    {presetQueries.map((presetQuery, index) => (
                        <button 
                            key={index} 
                            onClick={() => handlePresetQuery(presetQuery)} 
                            className="bg-gray-200 rounded px-2 py-1 hover:bg-gray-300"
                        >
                            {presetQuery}
                        </button>
                    ))}
                </div>
            </div>
            <div className="response-area mt-4">
                {response && (
                    <div className="border rounded p-2 bg-gray-50">
                        <h4 className="font-semibold">AI Response:</h4>
                        <p>{response}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AskAI;
