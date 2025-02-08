import { Request, Response } from 'express'
import {
  fetchAllUsersData,
  fetchUserData,
  updateUserData,
} from '../repository/userCollection'

/**
 * * Helper function to fetch all users for the API
 * @param req
 * @param res
 * @returns
 */
export const fetchAllUsers = async (req: Request, res: Response) => {
  try {
    const { data, error } = await fetchAllUsersData()

    if (error) {
      console.error('No users found:', error)

      res.status(404).json({ message: 'No users found', error })

      return
    }

    res.status(200).json({ message: 'Success', data })

    return
  } catch (error) {
    console.error(
      'An unexpected error occurred while fetching all user data:',
      error
    )

    res.status(500).json({
      message: 'An unexpected error occurred while fetching all user data',
      error,
    })

    return
  }
}

/**
 * * Helper function to fetch single user data for the API
 * @param req
 * @param res
 * @returns
 */
export const fetchUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { data, error } = await fetchUserData(id)

    if (error) {
      console.error('User not found:', error)

      res.status(404).json({ message: 'User not found', error })

      return
    }

    res.status(200).json({ message: 'Success', data })

    return
  } catch (error) {
    console.error(
      'An unexpected error occurred while fetching user data:',
      error
    )

    res.status(500).json({
      message: 'An unexpected error occurred while fetching user data',
      error,
    })

    return
  }
}

/**
 * * Helper function to update user data for the API
 * @param req
 * @param res
 * @returns
 */
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { success, error } = await updateUserData(id, req.body)

    if (error || !success) {
      console.error('User not found:', error)

      res.status(404).json({ message: 'User not found', error })

      return
    }

    res.status(200).json({ message: 'User data updated successfully' })

    return
  } catch (error) {
    console.error(
      'An unexpected error occurred while updating user data:',
      error
    )

    res.status(500).json({
      message: 'An unexpected error occurred while updating user data',
      error,
    })

    return
  }
}
