import { Component } from "react"
import "./MagicBall.css"

interface MagicBallState {
  question: string
  answer: string
}

class MagicBall extends Component<{}, MagicBallState> {
  private answers: string[] = [
    "Безсумнівно!",
    "Перспективи чудові",
    "Запитай пізніше",
    "Не можу зараз передбачити",
    "Даже не думай",
    "Мої джерела кажуть — ні",
    "Цілком імовірно",
    "Знаки кажуть — так"
  ]

  constructor(props: {}) {
    super(props)
    this.state = {
      question: "",
      answer: "Задай питання"
    }
  }

  getPrediction = () => {
    if (this.state.question.trim() === "") {
      this.setState({ answer: "Спочатку напиши питання!"})
      return
    }

    const randomIndex = Math.floor(Math.random() * this.answers.length)

    this.setState({ answer: this.answers[randomIndex]})
  }

  render() {
    return (
      <div className="magic-ball-container">
        <h2>Магічна Куля Передбачень</h2>

        <input
          type="text"
          placeholder="Напиши своє питання..."
          value={this.state.question}
          onChange={(e) => this.setState({ question: e.target.value })}
          className="magic-input"
        />

        <br />

        <div className="magic-ball" onClick={this.getPrediction}>
          <div className="ball-window">
            <p>{this.state.answer}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default MagicBall