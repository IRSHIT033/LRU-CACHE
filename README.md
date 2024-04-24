<!-- prettier-ignore-start -->
# BLAZE-CACHE
This package provides a simple utility for caching the results of functions based on their input arguments. By caching previously computed results. The caching mechanism uses LRU(Least recently Used) cache method to store results.
## How to use it
```
const {cache} = require('blaze-cache');
// or
import {cache} from "blaze-cache"

// program to display fibonacci sequence using recursion

function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

const result=cache(fibonacci)(40) // it will memoize the fibonacci function and return cached value

// PS: cache(somefunc,capacity) capacity argument will define the capacity of LRU cache
```
<!-- prettier-ignore-end -->
