interface Player {
  id: number
  email: string
  name: string
  enabled: boolean
  //roles?: PLAYER_ROLE[] | null
  facebookId?: string | null
  isVisibleInRankings: boolean
  newsletterEnabled: boolean
  passwordTokenToken?: string | null
  passwordTokenExpirationTime?: number | null
  photo?: string | null
  phoneNumber?: string | null
  registrationMobile: boolean
  language: string
  externalData?: string | null
  gender: string
  lastLoggedAt?: Date | null
  favoriteSportCenter: object | null
  image: object | null
  playerSportCenters: []
  createdAt: Date
  updatedAt: Date
  sessionsCount: number
  admin: boolean
  manager: boolean
  favoriteSportCenters: []
  managedSportCenters: []
  playerSports: object | null
}

interface PlayerSigninInput {
  email: string
  password: string
}

interface PlayerStore {
  player: Player
  isLogged: boolean
}

enum PLAYER_ROLE {}

export { Player, PlayerSigninInput, PlayerStore }
