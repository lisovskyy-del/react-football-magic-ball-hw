import { Component } from "react"
import "./ClubAchievements.css"

export interface Achievements {
  medals: string
  cups: string
  goals: number
}

interface ClubAchievementsProps {
  data: Achievements
}

class ClubAchievements extends Component<ClubAchievementsProps> {
  render() {
    const { medals, cups, goals } = this.props.data

    return (
      <div className="achievements-block">
        <h3>Досягнення:</h3>
        <ul className="achievements-list">
          <li>Медалі: {medals}</li>
          <li>Кубки: {cups}</li>
          <li>Забиті голи: {goals}</li>
        </ul>
      </div>
    )
  }
}

export default ClubAchievements