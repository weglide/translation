interface Unit {
  abbreviation: string
  factorToMetric: number
}

interface UnitSystem {
  climbRate: Unit
  cruiseSpeed: Unit
  XCSpeed: Unit
  XCSpeed1h: Unit
  distance: Unit
  altitude: Unit
  pressure: Unit
  weight: Unit
}

export interface Units {
  M: UnitSystem
  U: UnitSystem
  I: UnitSystem
}

export const units: Units = {
  // EU
  M: {
    climbRate: {
      abbreviation: 'm/s',
      factorToMetric: 1
    },
    cruiseSpeed: {
      abbreviation: 'km/h',
      factorToMetric: 1
    },
    XCSpeed: {
      abbreviation: 'km/h',
      factorToMetric: 1
    },
    XCSpeed1h: {
      abbreviation: 'km/1h',
      factorToMetric: 1
    },
    distance: {
      abbreviation: 'km',
      factorToMetric: 1
    },
    altitude: {
      abbreviation: 'm',
      factorToMetric: 1
    },
    pressure: {
      abbreviation: 'mBar',
      factorToMetric: 1
    },
    weight: {
      abbreviation: 'kg',
      factorToMetric: 1
    }
  },
  // USA, CA?
  U: {
    climbRate: {
      abbreviation: 'fpm',
      factorToMetric: 3.28084 * 60
    },
    cruiseSpeed: {
      abbreviation: 'kn',
      factorToMetric: 0.539957
    },
    XCSpeed: {
      abbreviation: 'mph', // kn?, kph?
      factorToMetric: 0.621371
    },
    XCSpeed1h: {
      abbreviation: 'mp1h', // kn?, kph?
      factorToMetric: 0.621371
    },
    distance: {
      abbreviation: 'nm',
      factorToMetric: 0.539957
    },
    altitude: {
      abbreviation: 'ft',
      factorToMetric: 3.28084
    },
    pressure: {
      abbreviation: 'hg', // inch of mercury
      factorToMetric: 0.02953
    },
    weight: {
      abbreviation: 'lb',
      factorToMetric: 2.204623
    }
  },
  // GB, AUS
  I: {
    climbRate: {
      abbreviation: 'kn',
      factorToMetric: 1.9438452
    },
    cruiseSpeed: {
      abbreviation: 'kn',
      factorToMetric: 0.539957
    },
    XCSpeed: {
      abbreviation: 'kph',
      factorToMetric: 1
    },
    XCSpeed1h: {
      abbreviation: 'kp1h',
      factorToMetric: 1
    },
    distance: {
      abbreviation: 'km',
      factorToMetric: 1
    },
    altitude: {
      abbreviation: 'ft',
      factorToMetric: 3.28084
    },
    pressure: {
      abbreviation: 'hPa',
      factorToMetric: 1 // hPa == mBar
    },
    weight: {
      abbreviation: 'kg',
      factorToMetric: 1
    }
  }
}
