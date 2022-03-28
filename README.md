Collection Game Demo
--------------------

This is a clone of the card game Set, made for personal/educational use only.

Play starts with a grid of cards, 3 rows by 4 columns.  Each card has symbols, with the symbols possessing 4 different properties: color, number, shape, and filling.  Each of the four properties comes in 3 levels:

 * color: red, purple, green
 * number: 1, 2, 3
 * shape: oval, squiggle, diamond
 * filling: empty, hatched, filled

The player's objective is to form sets of 3 cards where each member of the set, for each property, either shares the same value among all three cards or is different among all three cards.

For example, a set with 3 red oval filled cards, with numbers 1, 2, and 3 would work because all three share the same values of color, filling, and shape, but all three are different in number.  An invalid set might have two reds and one green -- thus the three cards would not all share the same value NOR would they all have different values.

If a set is correct, the player removes it from the board, scores a point, and then replaces the three missing cards out of the deck.  If there are no possible sets, the game is over (or the board can be relaid).

If a set is incorrect, the cards are put back in place on the board.

Next
----

0. Test cases to make sure that matching works properly (not-matching works by eye)
1. remove matched cards from the board
2. increment score
3. deal into missing spaces
4. make grid lay out correctly
5. reshuffle board
6. start over
