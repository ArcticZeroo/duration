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
export declare type DurationOrMilliseconds = Duration | number;
export default class Duration {
    static readonly microsecondsPerMillisecond = 1000;
    static readonly millisecondsPerSecond = 1000;
    static readonly secondsPerMinute = 60;
    static readonly minutesPerHour = 60;
    static readonly hoursPerDay = 24;
    static readonly microsecondsPerSecond: number;
    static readonly microsecondsPerMinute: number;
    static readonly microsecondsPerHour: number;
    static readonly microsecondsPerDay: number;
    static readonly millisecondsPerMinute: number;
    static readonly millisecondsPerHour: number;
    static readonly millisecondsPerDay: number;
    static readonly secondsPerHour: number;
    static readonly secondsPerDay: number;
    static readonly minutesPerDay: number;
    static readonly zero: Duration;
    /**
     * The value of this Duration object in microseconds
     */
    private readonly _duration;
    constructor({ days, hours, minutes, seconds, milliseconds, microseconds }: IDurationConstructorParams);
    /**
     * Adds this Duraiton and [other] and returns the difference as a new Duration object.
     * @param other
     */
    add(other: Duration | IDurationConstructorParams): Duration;
    /**
     * Subtracts [other] from this Duration and returns the difference as a new Duration object
     * @param other
     */
    subtract(other: Duration | IDurationConstructorParams): Duration;
    /**
     * Returns true if this {@link Duration} has the same value as {other}
     * @param other
     */
    equals(other: any): boolean;
    /**
     * Returns number of whole days spanned by this Duration.
     */
    readonly inDays: number;
    /**
     * Returns number of whole hours spanned by this Duration.
     */
    readonly inHours: number;
    /**
     * Returns number of whole minutes spanned by this Duration.
     */
    readonly inMinutes: number;
    /**
     * Returns number of whole seconds spanned by this Duration.
     */
    readonly inSeconds: number;
    /**
     * Returns number of whole milliseconds spanned by this Duration.
     */
    readonly inMilliseconds: number;
    /**
     * Returns number of whole microseconds spanned by this Duration.
     */
    readonly inMicroseconds: number;
    /**
     * Returns whether this `Duration` is negative.
     *
     * A negative `Duration` represents the difference from a later time to an
     * earlier time.
     */
    readonly isNegative: boolean;
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
    compareTo(other: Duration): number;
    /**
     * Returns a new `Duration` representing the absolute value of this
     * `Duration`.
     *
     * The returned `Duration` has the same length as this one, but is always
     * positive.
     */
    abs(): Duration;
    static fromDurationOrMilliseconds(value: DurationOrMilliseconds): Duration;
}
export {};
