import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './index';

// Типизированные хуки для работы с Redux в компонентах
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Теперь вы можете использовать их в компонентах вместо стандартных хуков, например:
// const dispatch = useAppDispatch();
// const { user, isAuthenticated, loading, error } = useAppSelector((state) => state.user);
