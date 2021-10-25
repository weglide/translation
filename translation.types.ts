export interface Translations { [key: string]: [string, string, string, string, string, string, string, string, string] }

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
    M: UnitSystem
    U: UnitSystem
    I: UnitSystem
}

export interface LocationTranslations {
    [key: string]: {
        name: [string, string, string, string, string, string, string, string, string]
        regions?: {
            [key: string]: {
                name: [string, string, string, string, string, string, string, string, string]
            }
        }
    }
}
