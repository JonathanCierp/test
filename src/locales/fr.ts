export default {
  message: {
    composables: {
      useValidationRules: {
        emailRule: "L'adresse mail n'est pas valide.",
        requiredRule: 'Ce champ est obligatoire.',
      },
    },
    components: {
      app: {
        AppSidebar: {
          menu0: {
            label: 'Dashboard',
            subMenus: ['Statistiques', 'Settings'],
          },
          menu1: {
            label: 'Mon club',
            subMenus: ['Fiche centre', 'Mon installation', 'Sponsoring', 'Livestreaming', 'Mes documents'],
          },
          menu2: {
            label: 'Services NGTV',
            subMenus: ['Gestion vidéo', 'Replay', 'Compétitions'],
          },
          menu3: {
            label: 'Communauté',
            subMenus: ['Joueurs', 'Clips vidéo'],
          },
          menu4: {
            label: 'Support / SAV',
            subMenus: ['Support', 'Ressources'],
          },
          menu5: {
            label: 'Profil',
            subMenus: ['Mes informations', 'Moyen de paiement'],
          },
        },
      },
    },
    modules: {
      auth: {
        pages: {
          SigninPage: {
            email: 'E-mail *',
            password: 'Mot de passe *',
            login: 'Se connecter',
          },
        },
      },
    },
    // OLDS
    appSidebar: {
      menu1: {
        label: 'Dashboard',
        subMenus: ['Statistiques', 'Settings'],
      },
      menu2: {
        label: 'Mon club',
        subMenus: ['Fiche centre', 'Mon installation', 'Sponsoring', 'Livestreaming', 'Mes documents'],
      },
      menu3: {
        label: 'Services NGTV',
        subMenus: ['Gestion vidéo', 'Replay', 'Compétitions'],
      },
      menu4: {
        label: 'Communauté',
        subMenus: ['Joueurs', 'Clips vidéo'],
      },
      menu5: {
        label: 'Support / SAV',
        subMenus: ['Support', 'Ressources'],
      },
      menu6: {
        label: 'Profil',
        subMenus: ['Mes informations', 'Moyen de paiement'],
      },
    },
    signinPage: {
      forgotPassword: 'Mot de passe oublié ?',
      signin: 'Se connecter',
      signinSuccess: 'Connecté avec succès.',
      signinFailure: 'Erreur lors de la connexion.',
      signoutSuccess: 'Déconnecté avec succès.',
      signoutFailure: 'Erreur lors de la déconnexion.',
    },
    player: {
      email: 'Email',
      password: 'Mot de passe',
    },
    // modules: {
    //   communities: {
    //     players: {
    //       tabs: ['Liste des joueurs', 'Liste des équipes'],
    //     },
    //     videos: {
    //       tabs: ['Liste des clips vidéo'],
    //     },
    //   },
    // },
  },
}
