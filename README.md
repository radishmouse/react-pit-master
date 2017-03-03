# base

- react
- storybook


## core approach to iterating on the UI

- focus on the smallest pieces
- build them up as you go

## keeping the data decoupled from the UI

data is necessary for making your site/app useful.
But, you don't want your components to have to care too much about the specifics.

I wonder if there isn't a library or something for seeding your react app with different
payloads of data?

is that even a library?
isn't that just "different data sources, swapped out as needed"

and, you could couple this with A/B testing of content or components or styles.

# project phases

## kickoff

is this where i talk about setup of project?
maybe yes.

## iteration phases

- standup
  - what's entailed in this?
- pairing
  - storybook to inspect individual items
- review (accept/reject)
  - visual diffs
    - [backstop.js](https://github.com/garris/BackstopJS)
      - [maybe integrating with storybook](https://github.com/storybooks/react-storybook/issues/26)
    - [bbc's wraith](https://pantheon.io/docs/guides/visual-diff-with-wraith/)
    - [percy](https://percy.io/)
      - works for rails, ember, and static
      - may need to statically render your storybooks to work with react?
    - [spotbot](https://spotbot.qa/)


## handoff

maybe not needed...


# plans for different branches

## bootstrap

This one is good for quick prototyping

but, if you wanted to replace bootstrap or customize it,
then you'd be reusing the component names (maybe dropping in your own, one at a time).
maybe that's not the worst thing?
maybe the process is that to replace a single bootstrap component, you just change
the import from theirs to yours?


## PostCSS/Sass/Less

Here, you are creating a whole separate .css file that you'll import.
This is great if you don't really need to iterate on the structure.
Storybook can still pick up the changes (I think?) and then redisplay.

You'll need a separate watcher/recompiler process.

## CSS Modules

This one will require the most research, I think.
I have no idea how these work, but, I think it's CSS in JS.

AirBNB's solution for keeping them decoupled might be the best.
I wonder if the JS modules couldn't extend Bootstrap (or somesuch)?
Giving you a way to rapidly prototype, then you backfill with your own custom css.

(this is pretty much extending the bootstrap approach)

# code organization

at what point do we talk about when and how to put your reusable components into their
own node module?