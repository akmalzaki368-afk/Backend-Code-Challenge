// A: Iterative approach
function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/*
Time Complexity: O(n)
Space Complexity: O(1)

Explanation:
Loops from 1 to n, adding each number.
Simple and safe but slower for large n.
*/