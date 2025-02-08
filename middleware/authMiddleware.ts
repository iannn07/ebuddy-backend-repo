import { Request, Response, NextFunction } from 'express'

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      res
        .status(401)
        .json({ message: 'Unauthorized. No authorization header found.' })

      return
    }

    console.log('Successfully retrieved authorization header:', authHeader)

    next()
  } catch (error) {
    console.error(
      'An unexpected error occurred while checking authentication:',
      error
    )

    res.status(500).json({
      message: 'An unexpected error occurred while checking authentication',
      error,
    })

    return
  }
}
