import React, { useState, useEffect } from 'react';
import '../index.css';
import { PiMoneyWavyLight } from 'react-icons/pi';

const financialAdvice = [
  {
    tip: 'Start Early with Saving and Investing',
    quote:
      "Compound interest is the eighth wonder of the world. He who understands it, earns it... he who doesn't... pays it.",
    author: 'Albert Einstein',
  },
  {
    tip: 'Live Below Your Means',
    quote:
      'Do not save what is left after spending, but spend what is left after saving.',
    author: 'Warren Buffett',
  },
  {
    tip: 'Diversify Your Investments',
    quote:
      'The only investors who shouldn’t diversify are those who are right 100% of the time.',
    author: 'John Templeton',
  },
  {
    tip: 'Understand the Power of Budgeting',
    quote:
      'A budget is telling your money where to go instead of wondering where it went.',
    author: 'Dave Ramsey',
  },
  {
    tip: 'Avoid Debt',
    quote: 'The borrower is slave to the lender.',
    author: 'Dave Ramsey',
  },
  {
    tip: 'Invest in What You Know',
    quote: 'Never invest in a business you cannot understand.',
    author: 'Warren Buffett',
  },
  {
    tip: 'Be Patient with Investments',
    quote:
      'The stock market is a device for transferring money from the impatient to the patient.',
    author: 'Warren Buffett',
  },
  {
    tip: 'Keep an Emergency Fund',
    quote:
      'The first rule of investing is not to lose money. The second rule is not to forget the first rule.',
    author: 'Warren Buffett',
  },
  {
    tip: 'Reinvest Your Earnings',
    quote:
      'When you invest, you should take advantage of compound growth by reinvesting your dividends and capital gains.',
    author: 'John C. Bogle',
  },
  {
    tip: 'Educate Yourself Continuously',
    quote: 'An investment in knowledge pays the best interest.',
    author: 'Benjamin Franklin',
  },
];

const FinancialAdvice = () => {
  const [displayQuote, setDisplayQuote] = useState(financialAdvice[0]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayQuote(
        financialAdvice[Math.floor(Math.random() * financialAdvice.length)]
      );
      setKey((prevKey) => prevKey + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const { tip, quote, author } = displayQuote;
  return (
    <div key={key} className="animate p-4 border rounded">
      <div className="mb-4 shadow-lg">
        <PiMoneyWavyLight className="success" style={{ fontSize: '2rem' }} />
        <PiMoneyWavyLight className="success" style={{ fontSize: '2rem' }} />
        <PiMoneyWavyLight className="success" style={{ fontSize: '2rem' }} />
        <PiMoneyWavyLight className="success" style={{ fontSize: '2rem' }} />
        <h4>Be Aware of Cash Flows</h4>
      </div>
      <h4>{tip}</h4>
      <div>
        <p>
          {quote} <span> - {author}</span>
        </p>
      </div>
    </div>
  );
};

export default FinancialAdvice;
