import * as React from 'react';
import { DataGroups } from '../../dataUtils/DataTypes';
import emojisByCategory from '../../dataUtils/emojisByCategory';
import { Emoji } from './Emoji';
import './EmojiCategory.css';

type Props = Readonly<{
  category: DataGroups;
}>;

export function EmojiCategory({ category }: Props) {
  const emojis = emojisByCategory(category);
  return (
    <li className="epr-emoji-category" data-name={category}>
      <div className="epr-emoji-category-label">{category}</div>
      {emojis.map(emoji => (
        <Emoji key={emoji.u} emoji={emoji} />
      ))}
    </li>
  );
}