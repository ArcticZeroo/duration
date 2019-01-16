"use strict";
/**
 * Pulled pretty much directly from dart core's Duration
 * https://github.com/dart-lang/sdk/blob/master/sdk/lib/core/duration.dart
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Duration {
    constructor({ days = 0, hours = 0, minutes = 0, seconds = 0, milliseconds = 0, microseconds = 0 }) {
        this._duration = (Duration.microsecondsPerDay * days +
            Duration.microsecondsPerHour * hours +
            Duration.microsecondsPerMinute * minutes +
            Duration.microsecondsPerSecond * seconds +
            Duration.microsecondsPerMillisecond * milliseconds +
            microseconds);
    }
    /**
     * Adds this Duraiton and [other] and returns the difference as a new Duration object.
     * @param other
     */
    add(other) {
        if (other instanceof Duration) {
            return new Duration({ microseconds: this._duration + other._duration });
        }
        return this.add(new Duration(other));
    }
    /**
     * Subtracts [other] from this Duration and returns the difference as a new Duration object
     * @param other
     */
    subtract(other) {
        if (other instanceof Duration) {
            return new Duration({ microseconds: this._duration - other._duration });
        }
        return this.add(new Duration(other));
    }
    /**
     * Returns true if this {@link Duration} has the same value as {other}
     * @param other
     */
    equals(other) {
        if (other instanceof Duration) {
            return other._duration == this._duration;
        }
        return false;
    }
    /**
     * Returns number of whole days spanned by this Duration.
     */
    get inDays() {
        return Math.trunc(this._duration / Duration.microsecondsPerDay);
    }
    /**
     * Returns number of whole hours spanned by this Duration.
     */
    get inHours() {
        return Math.trunc(this._duration / Duration.microsecondsPerHour);
    }
    /**
     * Returns number of whole minutes spanned by this Duration.
     */
    get inMinutes() {
        return Math.trunc(this._duration / Duration.microsecondsPerMinute);
    }
    /**
     * Returns number of whole seconds spanned by this Duration.
     */
    get inSeconds() {
        return Math.trunc(this._duration / Duration.microsecondsPerSecond);
    }
    /**
     * Returns number of whole milliseconds spanned by this Duration.
     */
    get inMilliseconds() {
        return Math.trunc(this._duration / Duration.microsecondsPerMillisecond);
    }
    /**
     * Returns number of whole microseconds spanned by this Duration.
     */
    get inMicroseconds() {
        return this._duration;
    }
    /**
     * Returns whether this `Duration` is negative.
     *
     * A negative `Duration` represents the difference from a later time to an
     * earlier time.
     */
    get isNegative() {
        return this._duration < 0;
    }
    /**
     * Compares this [Duration] to [other], returning zero if the values are equal.
     *
     * Returns a negative integer if this `Duration` is shorter than
     * [other], or a positive integer if it is longer.
     *
     * A negative `Duration` is always considered shorter than a positive one.
     *
     * It is always the case that `duration1.compareTo(duration2) < 0` iff
     * `(someDate + duration1).compareTo(someDate + duration2) < 0`.
     */
    compareTo(other) {
        return this._duration - other._duration;
    }
    /**
     * Returns a new `Duration` representing the absolute value of this
     * `Duration`.
     *
     * The returned `Duration` has the same length as this one, but is always
     * positive.
     */
    abs() {
        return new Duration({ microseconds: Math.abs(this._duration) });
    }
    static fromDurationOrMilliseconds(value) {
        if (value instanceof Duration) {
            return value;
        }
        return new Duration({ milliseconds: value });
    }
}
Duration.microsecondsPerMillisecond = 1000;
Duration.millisecondsPerSecond = 1000;
Duration.secondsPerMinute = 60;
Duration.minutesPerHour = 60;
Duration.hoursPerDay = 24;
Duration.microsecondsPerSecond = Duration.microsecondsPerMillisecond * Duration.millisecondsPerSecond;
Duration.microsecondsPerMinute = Duration.microsecondsPerSecond * Duration.secondsPerMinute;
Duration.microsecondsPerHour = Duration.microsecondsPerMinute * Duration.minutesPerHour;
Duration.microsecondsPerDay = Duration.microsecondsPerHour * Duration.hoursPerDay;
Duration.millisecondsPerMinute = Duration.millisecondsPerSecond * Duration.secondsPerMinute;
Duration.millisecondsPerHour = Duration.millisecondsPerMinute * Duration.minutesPerHour;
Duration.millisecondsPerDay = Duration.millisecondsPerHour * Duration.hoursPerDay;
Duration.secondsPerHour = Duration.secondsPerMinute * Duration.minutesPerHour;
Duration.secondsPerDay = Duration.secondsPerHour * Duration.hoursPerDay;
Duration.minutesPerDay = Duration.minutesPerHour * Duration.hoursPerDay;
Duration.zero = new Duration({});
exports.default = Duration;
//# sourceMappingURL=Duration.js.map