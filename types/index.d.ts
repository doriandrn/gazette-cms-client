type Themes = {
  [key: string]: Theme
}

type FontsSelection = {
  headings: Font[],
  ui: Font[],
  body: Font[]
}

type Fonts = {
  Selection,
  Sizes
}

type Typography = {
  fonts: Fonts,
  
}


type Theme = {
  typography: Typography,
  Palette,
  Spacings,

}


const themes: Themes = {
    default: {
      typography: {
        fonts: {
          textContent: 'Bw Surco',
          headings: 'Alfa Slab One', 
        }
      }
    },

    // these should override only what's in them from default
    black: {

    },
    tech: {

    },
    lifestyle: {
      
    }
  }
}
