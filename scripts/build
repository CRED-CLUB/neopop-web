#!/bin/bash

# Clean up
rm -rf lib
rm -rf lib-esm

# Bundle and Compile
npx cross-env NODE_ENV=production rollup -c

# Type check and Typedef
npx tsc --project tsconfig.build.json


