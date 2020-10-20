# @arcticzeroo/duration

This package is a direct port from [flutter](https://flutter.io)'s great `Duration` class. It makes operations on intervals of time (Durations) quick and easy.

All durations are entirely immutable.

Everything in `Duration.ts` should be documented, but you can also check out the [flutter API docs](https://api.flutter.dev/flutter/dart-core/Duration-class.html) for a near-identical set of docs. The only addition is `Duration.fromDurationOrMilliseconds`.

If you have any need to create your own duration operations, the smallest unit you can operate on is `microseconds`, so `Duration.inMicroseconds` is the number you want.

## Examples

```typescript
import Duration, { DurationOrMilliseconds } from '@arcticzeroo/duration';

const oneSecond = new Duration({ seconds: 1 });
setTimeout(() => console.log('one second has passed!'), oneSecond.inMilliseconds);

const twoSeconds = oneSecond.add(oneSecond);
setTimeout(() => console.log('two seconds have passed!'), twoSeconds.inMilliseconds);

const externalApi = (durationOrMs: DurationOrMilliseconds) => {
    const duration = Duration.fromDurationOrMilliseconds(durationOrMs);
    setTimeout(() => console.log(`${duration.inMilliseconds}ms have passed!`), duration.inMilliseconds);
};
```