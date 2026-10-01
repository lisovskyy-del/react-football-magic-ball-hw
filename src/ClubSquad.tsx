import { Component } from "react";
import "./ClubSquad.css"

interface Player {
  id: number
  name: string
  position: string
}

interface ClubSquadProps {
  players: Player[]
}

class ClubSquad extends Component<ClubSquadProps> {
  render() {
    return (
      <div className="squad-block">
        <h3>Склад команди:</h3>
        <ul>
          {this.props.players.map((player) => (
            <li key={player.id} className="player-item">
              <strong>{player.name}</strong> — {player.position}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ClubSquad