import React, { Component } from "react"
import { View } from "react-native"
import Field from "./components/field"

export default class App extends Component {
  state = {
    moles: [
      { id: 1, active: true },
      { id: 2, active: false },
      { id: 3, active: true },
      { id: 4, active: true },
      { id: 5, active: false },
      { id: 6, active: true },
      { id: 7, active: true },
      { id: 8, active: false },
      { id: 9, active: true },
    ],
  }

  componentDidMount() {
    this.interval && this.interval.clear()
    // this.cycleMoles()
  }

  cycleMoles() {
    return (this.interval = setInterval(() => {
      const rando = Math.floor(Math.random() * 9)
      const cycle = [rando, rando, rando]
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
        console.log("NEW MOLES", newMoles)
        this.setState({ moles: newMoles })
      }
    }, 1000))
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Field moles={this.state.moles} />
      </View>
    )
  }
}
