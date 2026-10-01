import { Component } from "react"
import "./ClubInfo.css"

interface ClubInfoProps {
  name: string;
  city: string;
  founded: number;
  logo: string;
}

interface ClubInfoState {
  currentTheme: string;
}

class ClubInfo extends Component<ClubInfoProps, ClubInfoState> {
  constructor(props: ClubInfoProps) {
    super(props)

    const themes = ["theme-blue", "theme-green", "theme-yellow"]
    const randomTheme = themes[Math.floor(Math.random() * themes.length)]

    this.state = {
      currentTheme: randomTheme
    }
  }

  render() {
    const { name, city, founded, logo } = this.props

    return (
      <div className={`club-card ${this.state.currentTheme}`}>
        <img src={logo} alt={name} className="club-logo" />
        <h2>{name}</h2>
        <p>Місто: {city}</p>
        <p>Заснований: {founded} рік</p>
      </div>
    )
  }
}

export default ClubInfo