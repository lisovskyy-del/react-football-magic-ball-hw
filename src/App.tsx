import React, { Component } from "react"
import { clubs } from "./clubsData"
import ClubInfo from "./ClubInfo"
import ClubAchievements from "./ClubAchievements"
import ClubSquad from "./ClubSquad"
import "./App.css"
import MagicBall from "./MagicBall.tsx";

interface AppState {
  selectedClubId: number
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props)

    this.state = {
      selectedClubId: 1,
    }
  }

  changeClub = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedClubId: Number(event.target.value) })
  }

  render() {
    const currentClub = clubs.find((c) => c.id === this.state.selectedClubId) || clubs[0]

    return (
      <div className="app-container">
        <h1 className="app-title">Футбол</h1>

        <div className="club-select-container">
          <label htmlFor="club-select" className="club-select-label">
            Обери клуб:
          </label>
          <select
            id="club-select"
            value={this.state.selectedClubId}
            onChange={this.changeClub}
            className="club-select"
          >
            {clubs.map((club) => (
              <option key={club.id} value={club.id}>
                {club.name}
              </option>
            ))}
          </select>
        </div>

        <hr className="divider" />

        <ClubInfo
          key={currentClub.id}
          name={currentClub.name}
          city={currentClub.city}
          founded={currentClub.founded}
          logo={currentClub.logo}
        />

        <ClubAchievements data={currentClub.achievements} />

        <ClubSquad players={currentClub.squad} />

        <MagicBall />
      </div>
    )
  }
}

export default App