import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from './button';

describe('Button', () => {
    it('should rendor label Add', () => {
        render(<Button />);
    });
});
