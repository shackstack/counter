import useCounter from './useCounter';
import { renderHook, act } from '@testing-library/react';

describe('useCounter Hook', () => {
  it('초기 값을 설정한 경우, 초기 count를 반환해야 한다.', () => {
    const { result } = renderHook(() =>
      useCounter({ stepper: 1, initialCount: 10 })
    );

    expect(result.current.value).toBe('10');
  });

  it('증가 함수 호출 시 count가 stepper만큼 증가해야 한다.', () => {
    const { result } = renderHook(() =>
      useCounter({ stepper: 2, initialCount: 0 })
    );

    act(() => {
      result.current.onIncrement();
    });

    expect(result.current.value).toBe('2');
  });

  it('감소 함수 호출 시 count가 stepper만큼 감소해야 한다.', () => {
    const { result } = renderHook(() =>
      useCounter({ stepper: 2, initialCount: 10 })
    );

    act(() => {
      result.current.onDecrement();
    });

    expect(result.current.value).toBe('8');
  });

  it('end 값에 도달하면 증가하지 않아야 한다.', () => {
    const { result } = renderHook(() =>
      useCounter({ stepper: 1, initialCount: 5, end: 5 })
    );

    act(() => {
      result.current.onIncrement();
    });

    expect(result.current.value).toBe('5');
  });

  it('start 값에 도달하면 감소하지 않아야 한다.', () => {
    const { result } = renderHook(() =>
      useCounter({ stepper: 1, initialCount: 0, start: 0 })
    );

    act(() => {
      result.current.onDecrement();
    });

    expect(result.current.value).toBe('0');
  });

  it('toFixed 설정 시 소수점 이하 자리를 반환해야 한다.', () => {
    const { result } = renderHook(() =>
      useCounter({ stepper: 1.12345, initialCount: 0, toFixed: 2 })
    );

    act(() => {
      result.current.onIncrement();
    });

    expect(result.current.value).toBe('1.12');
  });
});
