# React Info Gallery

> Show information and photos in a visual way.

## Usage

The valid props for this components are:


| Prop          | Definition                                                  | Default Value |
|---------------|-------------------------------------------------------------|---------------|
| title         | The main title of the carousel. Appears on top.             | ''            |
| cardHeight    | Height of the carousel                                      | 150px         |
| infoHeight    | Height of the information                                   | 300px         |
| cardsToShow   | Number of cards showed in the carousel                      | 6             |
| cardsToScroll | Number of card that are scrolled when the button is clicked | 6             |
| gradientColor | Color for the gradient in the info photos                   |               |

Also, you have the prop **info**, an array of objects that will manage the data. Each object will have a *cardPhoto*, *title* and *description*. The first one could be an static image or an URL, and the other two, a simple string or a component.

