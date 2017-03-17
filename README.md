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


## CSS Modules

This one actually requires the least amount of research.
It's CSS, one css file per js file, and you `import` it like
a js file, then you set the `className` property based on the
classes you use in the css file.

Nice, yeah?

AirBNB's has a solution for using CSS-in-JS styles with CSS Modules
(along with JSS and Aphrodite).

### using with bootstrap

If I understand correctly, you *could* just `import` the `bootstrap.css`
file from its folder in `node_modules`, but you couldn't do that per js module.

What you could do instead is `import` into the ...css file?
Is there a thing for importing in css?
(I think there's an `@import` plugin for webpack or something...)

I wonder if the JS modules couldn't extend Bootstrap (or somesuch)?
Giving you a way to rapidly prototype, then you backfill with your own custom css.


## bootstrap

This one is good for quick prototyping

but, if you wanted to replace bootstrap or customize it,
then you'd be reusing the component names (maybe dropping in your own, one at a time).
maybe that's not the worst thing?
maybe the process is that to replace a single bootstrap component, you just change
the import from theirs to yours?


Also - don't use "reactstrap" use [react-bootstrap](https://react-bootstrap.github.io/)
Great. They're named so similarly.


## PostCSS/Sass/Less

Here, you are creating a whole separate .css file that you'll import.
This is great if you don't really need to iterate on the structure.
Storybook can still pick up the changes (I think?) and then redisplay.

You'll need a separate watcher/recompiler process.

# code organization

at what point do we talk about when and how to put your reusable components into their
own node module?