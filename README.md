# Typescript bug report

1. Install deps: `yarn install`
1. Build: `yarn build`
1. Test: `yarn test`

You should see the following error upon running `yarn test`: "ReferenceError: Document is not defined"

If you inspect the output in `dist/Person.js` you'll see that the `Query` class is read off the imported `mongoose_1` import but `Document` is not, thus the error.