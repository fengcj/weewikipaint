class Solution {
    public int[] asteroidCollision(int[] asteroids) {

        if (asteroids.length == 0 || asteroids.length == 1) {
            return asteroids;
        }

        Stack<Integer> result = new Stack();
        result.add(asteroids[0]);
        for (int i = 1; i < asteroids.length; i++) {
            if (result.size() == 0) {
                result.add(asteroids[i]);
            } else {
                int top = result.peek();
                if (asteroids[i] < 0 && top > 0) {
                    if (Math.abs(asteroids[i]) == top) {
                        result.pop();
                    } else if (Math.abs(asteroids[i]) > top) {
                        result.pop();
                        if (result.size() == 0) {
                            result.push(asteroids[i]);
                        } else {
                            while (result.size() > 0 && result.peek() > 0
                                    && (Math.abs(asteroids[i]) >= result.peek())) {
                                top = result.pop();

                                if (top == Math.abs(asteroids[i])) {
                                    break;
                                }
                            }
                            if (result.size() == 0 && top != Math.abs(asteroids[i])) {
                                result.push(asteroids[i]);
                            } else if (result.size() > 0 && result.peek() < 0 && top < Math.abs(asteroids[i])) {
                                result.push(asteroids[i]);
                            }

                        }
                    }
                } else {
                    result.push(asteroids[i]);
                }
            }
        }

        if (result.size() == 0) {
            int[] arr = new int[0];
            return arr;
        }

        int[] arr = new int[result.size()];
        int k = result.size() - 1;
        while (result.size() != 0) {
            arr[k--] = result.pop();
        }
        return arr;

    }
}