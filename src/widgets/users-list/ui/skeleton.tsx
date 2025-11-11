/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface SkeletonUsersListProps {
  cardClassName?: string;
}

export const SkeletonUsersList = ({ cardClassName }: SkeletonUsersListProps) => (
  <>
    {[...Array(6)].map((_, index) => (
      <Skeleton
        className={clsx(cardClassName)}
        height={210}
        baseColor="#D1D1D1"
        highlightColor="#ECEBEB"
        style={{ borderRadius: '20px', display: 'block' }}
        key={index}
      />
    ))}
  </>
);
