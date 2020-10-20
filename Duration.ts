/**
 * Pulled pretty much directly from dart core's Duration
 * https://github.com/dart-lang/sdk/blob/master/sdk/lib/core/duration.dart
 */

interface IDurationConstructorParams {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    milliseconds?: number;
    microseconds?: number;
}

export type DurationOrMilliseconds = Duration | number;

export default class Duration {
    static readonly microsecondsPerMillisecond = 1000;
    static readonly millisecondsPerSecond = 1000;
    static readonly secondsPerMinute = 60;
    static readonly minutesPerHour = 60;
    static readonly hoursPerDay = 24;

    static readonly microsecondsPerSecond =
        Duration.microsecondsPerMillisecond * Duration.millisecondsPerSecond;
    static readonly microsecondsPerMinute =
        Duration.microsecondsPerSecond * Duration.secondsPerMinute;
    static readonly microsecondsPerHour = Duration.microsecondsPerMinute * Duration.minutesPerHour;
    static readonly microsecondsPerDay = Duration.microsecondsPerHour * Duration.hoursPerDay;

    static readonly millisecondsPerMinute =
        Duration.millisecondsPerSecond * Duration.secondsPerMinute;
    static readonly millisecondsPerHour = Duration.millisecondsPerMinute * Duration.minutesPerHour;
    static readonly millisecondsPerDay = Duration.millisecondsPerHour * Duration.hoursPerDay;

    static readonly secondsPerHour = Duration.secondsPerMinute * Duration.minutesPerHour;
    static readonly secondsPerDay = Duration.secondsPerHour * Duration.hoursPerDay;

    static readonly minutesPerDay = Duration.minutesPerHour * Duration.hoursPerDay;

    static readonly zero: Duration = new Duration();

    /**
     * The value of this Duration object in microseconds
     */
    private readonly _duration: number;

    constructor({ days = 0, hours = 0, minutes = 0, seconds = 0, milliseconds = 0, microseconds = 0 }: IDurationConstructorParams = {}) {
        this._duration = (
            Duration.microsecondsPerDay * days +
            Duration.microsecondsPerHour * hours +
            Duration.microsecondsPerMinute * minutes +
            Duration.microsecondsPerSecond * seconds +
            Duration.microsecondsPerMillisecond * milliseconds +
            microseconds
        );
    }

    /**
     * Adds this Duration and [other] and returns the difference as a new Duration object.
     * @param other A duration or constructor params for a duration
     */
    add(other: Duration | IDurationConstructorParams): Duration {
        if (other instanceof Duration) {
            return new Duration({ microseconds: this._duration + other._duration });
        }

        return this.add(new Duration(other));
    }

    /**
     * Subtracts [other] from this Duration and returns the difference as a new Duration object
     * @param other A duration or constructor params for a duration
     */
    subtract(other: Duration | IDurationConstructorParams): Duration {
        if (other instanceof Duration) {
            return new Duration({ microseconds: this._duration - other._duration });
        }

        return this.subtract(new Duration(other));
    }

    /**
     * Returns true if this {@link Duration} has the same value as {other}
     * @param other Any value to check equality
     */
    equals(other: any) {
        if (other instanceof Duration) {
            return other._duration == this._duration;
        }

        return false;
    }

    /**
     * Returns number of whole days spanned by this Duration.
     */
    get inDays(): number {
        return Math.trunc(this._duration / Duration.microsecondsPerDay);
    }

    /**
     * Returns number of whole hours spanned by this Duration.
     */
    get inHours(): number {
        return Math.trunc(this._duration / Duration.microsecondsPerHour);
    }

    /**
     * Returns number of whole minutes spanned by this Duration.
     */
    get inMinutes(): number {
        return Math.trunc(this._duration / Duration.microsecondsPerMinute);
    }

    /**
     * Returns number of whole seconds spanned by this Duration.
     */
    get inSeconds(): number {
        return Math.trunc(this._duration / Duration.microsecondsPerSecond);
    }

    /**
     * Returns number of whole milliseconds spanned by this Duration.
     */
    get inMilliseconds(): number {
        return Math.trunc(this._duration / Duration.microsecondsPerMillisecond);
    }

    /**
     * Returns number of whole microseconds spanned by this Duration.
     */
    get inMicroseconds(): number {
        return this._duration;
    }

    /**
     * Returns whether this `Duration` is negative.
     *
     * A negative `Duration` represents the difference from a later time to an
     * earlier time.
     */
    get isNegative(): boolean {
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
    compareTo(other: Duration): number {
        return this._duration - other._duration;
    }

    /**
     * Returns a new `Duration` representing the absolute value of this
     * `Duration`.
     *
     * The returned `Duration` has the same length as this one, but is always
     * positive.
     */
    abs(): Duration {
        return new Duration({ microseconds: Math.abs(this._duration) });
    }

    /**
     * Returns a new `Duration` from the given [value], where value is either
     * a `Duration` or an interval in milliseconds.
     * This is useful for situations where the calling users likely have no
     * idea that this library even exists, and just want to use Date millis.
     */
    static fromDurationOrMilliseconds(value: DurationOrMilliseconds): Duration {
        if (value instanceof Duration) {
            return value;
        }

        return new Duration({ milliseconds: value });
    }
}