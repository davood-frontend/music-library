import React from 'react';
interface ResponsiveIconProps extends React.HTMLAttributes<HTMLElement> {
    Icon: React.ElementType;
    color?: string;
}
const ResponsiveIcon: React.FC<ResponsiveIconProps> = ({ Icon, color, ...props }) => {
    return (
        <Icon sx={{ fontSize: { xs: 20, lg: 24 } }} color={color} {...props} />
    );
};

export default ResponsiveIcon;