/**
 * Компонент отвечает за любое перечисление элементов (заголовки, списки)
 */

import './List.css';

export default function List({ children, className }) {
  return (
    <ol className={className}>
      { children }
    </ol>
  );
}