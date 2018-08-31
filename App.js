import React, { Component } from "react"
import { View } from "react-native"
import Field from "./components/field"

export default class App extends Component {
  state = {
    moles: [
      { id: 1, active: false },
      { id: 2, active: false },
      { id: 3, active: false },
      { id: 4, active: false },
      { id: 5, active: false },
      { id: 6, active: false },
      { id: 7, active: false },
      { id: 8, active: false },
      { id: 9, active: false },
    ],
  }

  componentDidMount() {
    this.interval && this.interval.clear()
    this.cycleMoles()
  }

  cycleMoles() {
    return (this.interval = setInterval(() => {
      const rando = Math.floor(Math.random() * 9)
      const cycle = [rando, rando, rando, rando, rando, rando, rando, rando, rando]
      const { moles } = this.state
      if (cycle.length > 0) {
        const newMoles = moles.map((m, i) => {
          if (i === cycle[0]) {
            cycle.pop()
            return { id: m.id, active: !m.active }
          } else {
            cycle.pop()
            return m
          }
        })
        this.setState({ moles: newMoles })
      }
    }, 500))
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Field moles={this.state.moles} />
      </View>
    )
  }
}
