// C: Recursive approach
function sum_to_n_c(n: number): number {
    if (n <= 1) return n;
    return n + sum_to_n_c(n - 1);
}

/*
Time Complexity: O(n)
Space Complexity: O(n)

Explanation:
Uses recursion.
Elegant but NOT efficient due to stack usage.
Risk of stack overflow for large n.
*/