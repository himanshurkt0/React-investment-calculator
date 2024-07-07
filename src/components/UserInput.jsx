

export default function UserInput({ userInput, onChange }) {
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number"
                    required
                    value={userInput.initialInvestment}
                    onChange={() => onChange('initialInvestment', event.target.value)} />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required
                    value={userInput.annualInvestment}
                    onChange={() => onChange('annualInvestment', event.target.value)} />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required
                    value={userInput.expectedReturn}
                    onChange={() => onChange('expectedReturn', event.target.value)} />
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required
                    value={userInput.duration}
                    onChange={() => onChange('duration', event.target.value)} />
            </p>
        </div>
    </section>
}