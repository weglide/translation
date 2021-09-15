export interface Translations { [key: string]: [string, string, string, string, string, string, string, string] }

export interface Unit {
    abbreviation: string
    factorToMetric: number
}

export interface UnitSystem {
    climbRate: Unit
    cruiseSpeed: Unit
    XCSpeed: Unit
    distance: Unit
    altitude: Unit
    pressure: Unit
}

export interface Units {
    metric: UnitSystem
    us: UnitSystem
    gb: UnitSystem
}
