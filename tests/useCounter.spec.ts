import { renderHook, act } from '@testing-library/react';
import useCounter from '../useCounter';

describe('useCounter', () => {
  it('should initialize count with default value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('should increment count by val', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it('should update val and increment by new val', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(5);
      result.current.increment();
    });
    expect(result.current.count).toBe(5);
  });

  it('should decrement count by val', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(2);
      result.current.decrement();
    });
    expect(result.current.count).toBe(-2);
  });

  it('should reset count to initial value', () => {
    const { result } = renderHook(() => useCounter(3));
    act(() => {
      result.current.increment();
      result.current.reset();
    });
    expect(result.current.count).toBe(3);
  });
});