import React from 'react';

function Survey() {
    return (
        <form id="survey-form">
            <div className="form-group">
                <label id="name-label" htmlFor="name">📛 Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                />
            </div>
            <div className="form-group">
                <label id="email-label" htmlFor="email">📧 Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your Email"
                    required
                />
            </div>
            <div className="form-group">
                <label id="number-label" htmlFor="number"
                >🧮 Age<span className="clue">(optional)</span></label
                >
                <input
                    type="number"
                    name="age"
                    id="number"
                    min="10"
                    max="101"
                    className="form-control"
                    placeholder="Age"
                />
            </div>
            <div className="form-group">
                <p>💼 Which option best describes your current role?</p>
                <select id="dropdown" name="role" className="form-control" required>
                    <option disabled>Select current role</option>
                    <option value="developer">Developer</option>
                    <option value="ceo">Chief executive officer</option>
                    <option value="learner">Full Time Learner</option>
                    <option value="preferNo">Prefer not to say</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="form-group">
                <p>🤝 Would you recommend Mon Pro Web to a friend?</p>
                <label>
                    <input
                        name="user-recommend"
                        value="definitely"
                        type="radio"
                        className="input-radio"
                        checked
                    />Definitely</label
                >
                <label>
                    <input
                        name="user-recommend"
                        value="maybe"
                        type="radio"
                        className="input-radio"
                    />Maybe</label
                >

                <label
                ><input
                        name="user-recommend"
                        value="not-sure"
                        type="radio"
                        className="input-radio"
                    />Not sure</label
                >
            </div>

            <div className="form-group">
                <p>
                    ⚛️ What is your favorite feature of Mon Pro Web?
      </p>
                <select id="most-like" name="mostLike" className="form-control" required>
                    <option disabled>Select an option</option>
                    <option value="react">React</option>
                    <option value="reactnative">React Native</option>
                    <option value="relay">Relay</option>
                    <option value="ubuntu">Ubuntu</option>
                </select>
            </div>

            <div className="form-group">
                <p>
                    📈 What would you like to see improved?
        <span className="clue">(Check all that apply)</span>
                </p>

                <label
                ><input
                        name="prefer"
                        value="front-end-projects"
                        type="checkbox"
                        className="input-checkbox"
                    />Front-end Projects</label
                >
                <label>
                    <input
                        name="prefer"
                        value="back-end-projects"
                        type="checkbox"
                        className="input-checkbox"
                    />Back-end Projects</label
                >
                <label
                ><input
                        name="prefer"
                        value="agile-software-development"
                        type="checkbox"
                        className="input-checkbox"
                    />Agile software development</label>
                <label
                ><input
                        name="prefer"
                        value="marketing"
                        type="checkbox"
                        className="input-checkbox"
                    />Marketing</label
                >
                <label
                ><input
                        name="prefer"
                        value="open-source-community"
                        type="checkbox"
                        className="input-checkbox"
                    />Open Source Community</label>
            </div>
            <div className="form-group">
                <p>💡 Any comments or suggestions?</p>
                <textarea
                    id="comments"
                    className="input-textarea"
                    name="comment"
                    placeholder="Enter your comment here..."
                ></textarea>
            </div>

            <div className="form-group">
                <button type="submit" id="submit" className="submit-button">
                    🚀 Submit
      </button>
            </div>
        </form>
    );
}

export default Survey;
