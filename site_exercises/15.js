function go({speed=4, enable={hyperdrive: false, frobnifier: true}}) {

  console.log("speed=", speed,
              "hyperdrive:", enable.hyperdrive,
              "frobnifier:", enable.frobnifier)
}

go({speed: 5})
